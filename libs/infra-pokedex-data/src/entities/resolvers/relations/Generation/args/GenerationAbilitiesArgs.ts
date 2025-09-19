import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityOrderByWithRelationInput } from "../../../inputs/AbilityOrderByWithRelationInput";
import { AbilityWhereInput } from "../../../inputs/AbilityWhereInput";
import { AbilityWhereUniqueInput } from "../../../inputs/AbilityWhereUniqueInput";
import { AbilityScalarFieldEnum } from "../../../../enums/AbilityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GenerationAbilitiesArgs {
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

  @TypeGraphQL.Field(_type => [AbilityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "is_main_series"> | undefined;
}
