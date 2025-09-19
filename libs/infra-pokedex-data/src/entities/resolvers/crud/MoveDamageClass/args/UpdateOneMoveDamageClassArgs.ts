import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassUpdateInput } from "../../../inputs/MoveDamageClassUpdateInput";
import { MoveDamageClassWhereUniqueInput } from "../../../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveDamageClassArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassUpdateInput, {
    nullable: false
  })
  data!: MoveDamageClassUpdateInput;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassWhereUniqueInput;
}
