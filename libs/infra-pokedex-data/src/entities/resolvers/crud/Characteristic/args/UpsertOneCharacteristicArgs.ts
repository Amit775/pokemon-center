import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicCreateInput } from "../../../inputs/CharacteristicCreateInput";
import { CharacteristicUpdateInput } from "../../../inputs/CharacteristicUpdateInput";
import { CharacteristicWhereUniqueInput } from "../../../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCharacteristicArgs {
  @TypeGraphQL.Field(_type => CharacteristicWhereUniqueInput, {
    nullable: false
  })
  where!: CharacteristicWhereUniqueInput;

  @TypeGraphQL.Field(_type => CharacteristicCreateInput, {
    nullable: false
  })
  create!: CharacteristicCreateInput;

  @TypeGraphQL.Field(_type => CharacteristicUpdateInput, {
    nullable: false
  })
  update!: CharacteristicUpdateInput;
}
