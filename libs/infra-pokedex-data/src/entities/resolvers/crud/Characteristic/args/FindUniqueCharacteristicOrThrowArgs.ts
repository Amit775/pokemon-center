import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicWhereUniqueInput } from "../../../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCharacteristicOrThrowArgs {
  @TypeGraphQL.Field(_type => CharacteristicWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicWhereUniqueInput;
}
