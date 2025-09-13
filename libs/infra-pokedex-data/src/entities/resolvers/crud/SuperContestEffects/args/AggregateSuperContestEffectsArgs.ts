import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsOrderByWithRelationInput } from "../../../inputs/SuperContestEffectsOrderByWithRelationInput";
import { SuperContestEffectsWhereInput } from "../../../inputs/SuperContestEffectsWhereInput";
import { SuperContestEffectsWhereUniqueInput } from "../../../inputs/SuperContestEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSuperContestEffectsArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SuperContestEffectsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SuperContestEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
