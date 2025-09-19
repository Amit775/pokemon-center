import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexOrderByWithRelationInput } from "../../../inputs/TypeGameIndexOrderByWithRelationInput";
import { TypeGameIndexWhereInput } from "../../../inputs/TypeGameIndexWhereInput";
import { TypeGameIndexWhereUniqueInput } from "../../../inputs/TypeGameIndexWhereUniqueInput";
import { TypeGameIndexScalarFieldEnum } from "../../../../enums/TypeGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTypeGameIndexOrThrowArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  where?: TypeGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TypeGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: TypeGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"type_id" | "generation_id" | "game_index"> | undefined;
}
