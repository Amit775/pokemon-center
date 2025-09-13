import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesWhereUniqueInput } from "../../../inputs/TypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTypesOrThrowArgs {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;
}
