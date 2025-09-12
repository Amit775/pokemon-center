import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsCreateManyInput } from "../../../inputs/CharacteristicsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCharacteristicsArgs {
  @TypeGraphQL.Field(_type => [CharacteristicsCreateManyInput], {
    nullable: false
  })
  data!: CharacteristicsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
