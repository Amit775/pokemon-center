import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassWhereUniqueInput } from "../../../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveDamageClassOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassWhereUniqueInput;
}
