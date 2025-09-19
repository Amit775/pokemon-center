import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotCreateManyInput } from "../../../inputs/EncounterSlotCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEncounterSlotArgs {
  @TypeGraphQL.Field(_type => [EncounterSlotCreateManyInput], {
    nullable: false
  })
  data!: EncounterSlotCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
