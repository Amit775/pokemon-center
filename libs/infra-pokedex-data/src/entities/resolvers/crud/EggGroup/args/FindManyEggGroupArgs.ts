import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupOrderByWithRelationInput } from "../../../inputs/EggGroupOrderByWithRelationInput";
import { EggGroupWhereInput } from "../../../inputs/EggGroupWhereInput";
import { EggGroupWhereUniqueInput } from "../../../inputs/EggGroupWhereUniqueInput";
import { EggGroupScalarFieldEnum } from "../../../../enums/EggGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  where?: EggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EggGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EggGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EggGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: EggGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EggGroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
