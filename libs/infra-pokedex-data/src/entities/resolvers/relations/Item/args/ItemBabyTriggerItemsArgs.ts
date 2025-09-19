import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainOrderByWithRelationInput } from "../../../inputs/EvolutionChainOrderByWithRelationInput";
import { EvolutionChainWhereInput } from "../../../inputs/EvolutionChainWhereInput";
import { EvolutionChainWhereUniqueInput } from "../../../inputs/EvolutionChainWhereUniqueInput";
import { EvolutionChainScalarFieldEnum } from "../../../../enums/EvolutionChainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ItemBabyTriggerItemsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  where?: EvolutionChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EvolutionChainOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: true
  })
  cursor?: EvolutionChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "baby_trigger_item_id"> | undefined;
}
