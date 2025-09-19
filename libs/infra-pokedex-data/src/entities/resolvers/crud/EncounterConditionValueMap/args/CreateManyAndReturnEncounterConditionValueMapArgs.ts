import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapCreateManyInput } from "../../../inputs/EncounterConditionValueMapCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateManyInput], {
    nullable: false
  })
  data!: EncounterConditionValueMapCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
