import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeOrderByWithRelationInput } from "../../../inputs/TypeOrderByWithRelationInput";
import { TypeWhereInput } from "../../../inputs/TypeWhereInput";
import { TypeWhereUniqueInput } from "../../../inputs/TypeWhereUniqueInput";
import { TypeScalarFieldEnum } from "../../../../enums/TypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GenerationTypesArgs {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "damage_class_id"> | undefined;
}
