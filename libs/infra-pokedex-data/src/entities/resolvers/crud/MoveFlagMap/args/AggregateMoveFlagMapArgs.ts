import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapOrderByWithRelationInput } from "../../../inputs/MoveFlagMapOrderByWithRelationInput";
import { MoveFlagMapWhereInput } from "../../../inputs/MoveFlagMapWhereInput";
import { MoveFlagMapWhereUniqueInput } from "../../../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveFlagMapArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  where?: MoveFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveFlagMapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveFlagMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
