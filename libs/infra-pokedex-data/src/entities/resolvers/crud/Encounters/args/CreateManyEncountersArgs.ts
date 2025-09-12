import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersCreateManyInput } from "../../../inputs/EncountersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEncountersArgs {
  @TypeGraphQL.Field(_type => [EncountersCreateManyInput], {
    nullable: false
  })
  data!: EncountersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
