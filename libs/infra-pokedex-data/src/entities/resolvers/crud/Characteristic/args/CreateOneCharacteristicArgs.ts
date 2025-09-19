import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicCreateInput } from "../../../inputs/CharacteristicCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCharacteristicArgs {
  @TypeGraphQL.Field(_type => CharacteristicCreateInput, {
    nullable: false
  })
  data!: CharacteristicCreateInput;
}
