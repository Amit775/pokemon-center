import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicCreateManyInput } from "../../../inputs/CharacteristicCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnCharacteristicArgs {
  @TypeGraphQL.Field(_type => [CharacteristicCreateManyInput], {
    nullable: false
  })
  data!: CharacteristicCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
