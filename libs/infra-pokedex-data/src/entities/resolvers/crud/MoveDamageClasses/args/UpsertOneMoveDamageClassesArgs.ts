import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesCreateInput } from "../../../inputs/MoveDamageClassesCreateInput";
import { MoveDamageClassesUpdateInput } from "../../../inputs/MoveDamageClassesUpdateInput";
import { MoveDamageClassesWhereUniqueInput } from "../../../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateInput, {
    nullable: false
  })
  create!: MoveDamageClassesCreateInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateInput, {
    nullable: false
  })
  update!: MoveDamageClassesUpdateInput;
}
