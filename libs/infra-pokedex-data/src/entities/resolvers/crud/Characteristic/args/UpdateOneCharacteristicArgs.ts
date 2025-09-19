import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicUpdateInput } from "../../../inputs/CharacteristicUpdateInput";
import { CharacteristicWhereUniqueInput } from "../../../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCharacteristicArgs {
  @TypeGraphQL.Field(_type => CharacteristicUpdateInput, {
    nullable: false
  })
  data!: CharacteristicUpdateInput;

  @TypeGraphQL.Field(_type => CharacteristicWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicWhereUniqueInput;
}
