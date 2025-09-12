import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsCreateManyInput } from "../../../inputs/EncounterSlotsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => [EncounterSlotsCreateManyInput], {
    nullable: false
  })
  data!: EncounterSlotsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
