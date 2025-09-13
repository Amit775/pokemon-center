import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsOrderByWithRelationInput } from "../../../inputs/MoveFlagsOrderByWithRelationInput";
import { MoveFlagsWhereInput } from "../../../inputs/MoveFlagsWhereInput";
import { MoveFlagsWhereUniqueInput } from "../../../inputs/MoveFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  where?: MoveFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveFlagsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveFlagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
