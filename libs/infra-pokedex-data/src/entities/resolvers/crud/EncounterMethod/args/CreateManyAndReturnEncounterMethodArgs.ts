import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodCreateManyInput } from "../../../inputs/EncounterMethodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEncounterMethodArgs {
  @TypeGraphQL.Field(_type => [EncounterMethodCreateManyInput], {
    nullable: false
  })
  data!: EncounterMethodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
