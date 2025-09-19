import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterCreateManyInput } from "../../../inputs/EncounterCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEncounterArgs {
  @TypeGraphQL.Field(_type => [EncounterCreateManyInput], {
    nullable: false
  })
  data!: EncounterCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
