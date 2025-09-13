import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesOrderByWithRelationInput } from "../../../inputs/MovesOrderByWithRelationInput";
import { MovesWhereInput } from "../../../inputs/MovesWhereInput";
import { MovesWhereUniqueInput } from "../../../inputs/MovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovesArgs {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MovesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
