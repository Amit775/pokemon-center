import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsOrderByWithRelationInput } from "../../../inputs/MoveEffectsOrderByWithRelationInput";
import { MoveEffectsWhereInput } from "../../../inputs/MoveEffectsWhereInput";
import { MoveEffectsWhereUniqueInput } from "../../../inputs/MoveEffectsWhereUniqueInput";
import { MoveEffectsScalarFieldEnum } from "../../../../enums/MoveEffectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveEffectsArgs {
  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  where?: MoveEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveEffectsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsScalarFieldEnum], {
    nullable: true
  })
  distinct?: "id"[] | undefined;
}
