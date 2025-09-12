import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsCreateManyInput } from "../../../inputs/SuperContestEffectsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySuperContestEffectsArgs {
  @TypeGraphQL.Field(_type => [SuperContestEffectsCreateManyInput], {
    nullable: false
  })
  data!: SuperContestEffectsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
