import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsUpdateManyMutationInput } from "../../../inputs/CharacteristicsUpdateManyMutationInput";
import { CharacteristicsWhereInput } from "../../../inputs/CharacteristicsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CharacteristicsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CharacteristicsWhereInput, {
    nullable: true
  })
  where?: CharacteristicsWhereInput | undefined;
}
