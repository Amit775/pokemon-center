import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsWhereUniqueInput } from "../../../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicsWhereUniqueInput;
}
