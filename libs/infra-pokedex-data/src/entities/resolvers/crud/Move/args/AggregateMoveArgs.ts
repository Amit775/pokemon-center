import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveOrderByWithRelationInput } from "../../../inputs/MoveOrderByWithRelationInput";
import { MoveWhereInput } from "../../../inputs/MoveWhereInput";
import { MoveWhereUniqueInput } from "../../../inputs/MoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveArgs {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
