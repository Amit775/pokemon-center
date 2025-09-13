import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaOrderByWithRelationInput } from "../../../inputs/MoveMetaOrderByWithRelationInput";
import { MoveMetaWhereInput } from "../../../inputs/MoveMetaWhereInput";
import { MoveMetaWhereUniqueInput } from "../../../inputs/MoveMetaWhereUniqueInput";
import { MoveMetaScalarFieldEnum } from "../../../../enums/MoveMetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MoveMetaAilmentsMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  where?: MoveMetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveMetaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveMetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"move_id" | "meta_category_id" | "meta_ailment_id" | "min_hits" | "max_hits" | "min_turns" | "max_turns" | "drain" | "healing" | "crit_rate" | "ailment_chance" | "flinch_chance" | "stat_chance"> | undefined;
}
