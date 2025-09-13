import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesOrderByWithRelationInput } from "../../../inputs/MoveMetaCategoriesOrderByWithRelationInput";
import { MoveMetaCategoriesWhereInput } from "../../../inputs/MoveMetaCategoriesWhereInput";
import { MoveMetaCategoriesWhereUniqueInput } from "../../../inputs/MoveMetaCategoriesWhereUniqueInput";
import { MoveMetaCategoriesScalarFieldEnum } from "../../../../enums/MoveMetaCategoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveMetaCategoriesOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveMetaCategoriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveMetaCategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
