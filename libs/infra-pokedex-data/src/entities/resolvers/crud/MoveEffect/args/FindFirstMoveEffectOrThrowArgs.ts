import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectOrderByWithRelationInput } from "../../../inputs/MoveEffectOrderByWithRelationInput";
import { MoveEffectWhereInput } from "../../../inputs/MoveEffectWhereInput";
import { MoveEffectWhereUniqueInput } from "../../../inputs/MoveEffectWhereUniqueInput";
import { MoveEffectScalarFieldEnum } from "../../../../enums/MoveEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveEffectOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  where?: MoveEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveEffectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveEffectWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectScalarFieldEnum], {
    nullable: true
  })
  distinct?: "id"[] | undefined;
}
