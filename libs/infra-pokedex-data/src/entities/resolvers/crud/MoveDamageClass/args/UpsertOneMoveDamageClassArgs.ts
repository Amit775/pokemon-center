import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassCreateInput } from "../../../inputs/MoveDamageClassCreateInput";
import { MoveDamageClassUpdateInput } from "../../../inputs/MoveDamageClassUpdateInput";
import { MoveDamageClassWhereUniqueInput } from "../../../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveDamageClassArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateInput, {
    nullable: false
  })
  create!: MoveDamageClassCreateInput;

  @TypeGraphQL.Field(_type => MoveDamageClassUpdateInput, {
    nullable: false
  })
  update!: MoveDamageClassUpdateInput;
}
