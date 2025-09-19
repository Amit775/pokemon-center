import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagOrderByWithRelationInput } from "../../../inputs/MoveFlagOrderByWithRelationInput";
import { MoveFlagWhereInput } from "../../../inputs/MoveFlagWhereInput";
import { MoveFlagWhereUniqueInput } from "../../../inputs/MoveFlagWhereUniqueInput";
import { MoveFlagScalarFieldEnum } from "../../../../enums/MoveFlagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveFlagOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  where?: MoveFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveFlagOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveFlagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
