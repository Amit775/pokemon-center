import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsWhereUniqueInput } from "../../../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGenerationsOrThrowArgs {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;
}
