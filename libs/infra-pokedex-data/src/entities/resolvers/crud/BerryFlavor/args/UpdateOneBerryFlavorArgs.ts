import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorUpdateInput } from "../../../inputs/BerryFlavorUpdateInput";
import { BerryFlavorWhereUniqueInput } from "../../../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBerryFlavorArgs {
  @TypeGraphQL.Field(_type => BerryFlavorUpdateInput, {
    nullable: false
  })
  data!: BerryFlavorUpdateInput;

  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;
}
