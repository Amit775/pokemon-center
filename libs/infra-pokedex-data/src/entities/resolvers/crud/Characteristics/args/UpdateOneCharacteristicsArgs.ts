import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsUpdateInput } from "../../../inputs/CharacteristicsUpdateInput";
import { CharacteristicsWhereUniqueInput } from "../../../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsUpdateInput, {
    nullable: false
  })
  data!: CharacteristicsUpdateInput;

  @TypeGraphQL.Field(_type => CharacteristicsWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicsWhereUniqueInput;
}
