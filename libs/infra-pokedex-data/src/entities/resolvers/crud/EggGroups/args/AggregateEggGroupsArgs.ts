import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsOrderByWithRelationInput } from "../../../inputs/EggGroupsOrderByWithRelationInput";
import { EggGroupsWhereInput } from "../../../inputs/EggGroupsWhereInput";
import { EggGroupsWhereUniqueInput } from "../../../inputs/EggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEggGroupsArgs {
  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  where?: EggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EggGroupsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EggGroupsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EggGroupsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EggGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
