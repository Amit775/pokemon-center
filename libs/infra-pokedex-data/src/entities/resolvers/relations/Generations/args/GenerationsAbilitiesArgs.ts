import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesOrderByWithRelationInput } from "../../../inputs/AbilitiesOrderByWithRelationInput";
import { AbilitiesWhereInput } from "../../../inputs/AbilitiesWhereInput";
import { AbilitiesWhereUniqueInput } from "../../../inputs/AbilitiesWhereUniqueInput";
import { AbilitiesScalarFieldEnum } from "../../../../enums/AbilitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GenerationsAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  where?: AbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AbilitiesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: true
  })
  cursor?: AbilitiesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "is_main_series"> | undefined;
}
