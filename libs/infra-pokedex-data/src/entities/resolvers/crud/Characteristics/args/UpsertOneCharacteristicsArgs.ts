import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsCreateInput } from "../../../inputs/CharacteristicsCreateInput";
import { CharacteristicsUpdateInput } from "../../../inputs/CharacteristicsUpdateInput";
import { CharacteristicsWhereUniqueInput } from "../../../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicsCreateInput, {
    nullable: false
  })
  create!: CharacteristicsCreateInput;

  @TypeGraphQL.Field(_type => CharacteristicsUpdateInput, {
    nullable: false
  })
  update!: CharacteristicsUpdateInput;
}
