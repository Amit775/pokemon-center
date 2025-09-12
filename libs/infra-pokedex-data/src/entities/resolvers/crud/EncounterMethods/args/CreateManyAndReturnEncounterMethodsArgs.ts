import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsCreateManyInput } from "../../../inputs/EncounterMethodsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => [EncounterMethodsCreateManyInput], {
    nullable: false
  })
  data!: EncounterMethodsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
