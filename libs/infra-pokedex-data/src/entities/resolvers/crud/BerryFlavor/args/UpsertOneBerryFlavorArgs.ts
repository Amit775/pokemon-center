import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorCreateInput } from "../../../inputs/BerryFlavorCreateInput";
import { BerryFlavorUpdateInput } from "../../../inputs/BerryFlavorUpdateInput";
import { BerryFlavorWhereUniqueInput } from "../../../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBerryFlavorArgs {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorCreateInput, {
    nullable: false
  })
  create!: BerryFlavorCreateInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateInput, {
    nullable: false
  })
  update!: BerryFlavorUpdateInput;
}
