import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsWhereInput } from "../../../inputs/CharacteristicsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsWhereInput, {
    nullable: true
  })
  where?: CharacteristicsWhereInput | undefined;
}
