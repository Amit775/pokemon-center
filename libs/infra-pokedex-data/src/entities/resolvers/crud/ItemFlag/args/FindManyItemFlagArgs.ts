import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagOrderByWithRelationInput } from "../../../inputs/ItemFlagOrderByWithRelationInput";
import { ItemFlagWhereInput } from "../../../inputs/ItemFlagWhereInput";
import { ItemFlagWhereUniqueInput } from "../../../inputs/ItemFlagWhereUniqueInput";
import { ItemFlagScalarFieldEnum } from "../../../../enums/ItemFlagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyItemFlagArgs {
  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  where?: ItemFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemFlagOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlagWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemFlagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
