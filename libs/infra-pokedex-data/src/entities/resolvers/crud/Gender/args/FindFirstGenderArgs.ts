import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderOrderByWithRelationInput } from "../../../inputs/GenderOrderByWithRelationInput";
import { GenderWhereInput } from "../../../inputs/GenderWhereInput";
import { GenderWhereUniqueInput } from "../../../inputs/GenderWhereUniqueInput";
import { GenderScalarFieldEnum } from "../../../../enums/GenderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGenderArgs {
  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  where?: GenderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenderOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GenderOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: true
  })
  cursor?: GenderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GenderScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
