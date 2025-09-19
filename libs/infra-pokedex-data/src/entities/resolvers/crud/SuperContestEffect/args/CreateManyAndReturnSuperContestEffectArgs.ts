import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectCreateManyInput } from "../../../inputs/SuperContestEffectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => [SuperContestEffectCreateManyInput], {
    nullable: false
  })
  data!: SuperContestEffectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
