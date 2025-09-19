import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectOrderByWithRelationInput } from "../../../inputs/SuperContestEffectOrderByWithRelationInput";
import { SuperContestEffectWhereInput } from "../../../inputs/SuperContestEffectWhereInput";
import { SuperContestEffectWhereUniqueInput } from "../../../inputs/SuperContestEffectWhereUniqueInput";
import { SuperContestEffectScalarFieldEnum } from "../../../../enums/SuperContestEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SuperContestEffectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereUniqueInput, {
    nullable: true
  })
  cursor?: SuperContestEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "appeal"> | undefined;
}
