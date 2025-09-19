import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryUpdateInput } from "../../../inputs/BerryUpdateInput";
import { BerryWhereUniqueInput } from "../../../inputs/BerryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBerryArgs {
  @TypeGraphQL.Field(_type => BerryUpdateInput, {
    nullable: false
  })
  data!: BerryUpdateInput;

  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;
}
