import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesWhereUniqueInput } from "../../../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassesWhereUniqueInput;
}
