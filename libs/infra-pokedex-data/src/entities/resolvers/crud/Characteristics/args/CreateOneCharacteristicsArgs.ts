import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsCreateInput } from "../../../inputs/CharacteristicsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsCreateInput, {
    nullable: false
  })
  data!: CharacteristicsCreateInput;
}
