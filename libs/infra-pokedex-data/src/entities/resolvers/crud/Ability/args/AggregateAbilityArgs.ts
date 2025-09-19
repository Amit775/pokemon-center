import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityOrderByWithRelationInput } from "../../../inputs/AbilityOrderByWithRelationInput";
import { AbilityWhereInput } from "../../../inputs/AbilityWhereInput";
import { AbilityWhereUniqueInput } from "../../../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAbilityArgs {
  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  where?: AbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AbilityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AbilityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: true
  })
  cursor?: AbilityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
