import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationOrderByWithRelationInput } from "../../../inputs/GenerationOrderByWithRelationInput";
import { GenerationWhereInput } from "../../../inputs/GenerationWhereInput";
import { GenerationWhereUniqueInput } from "../../../inputs/GenerationWhereUniqueInput";
import { GenerationScalarFieldEnum } from "../../../../enums/GenerationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGenerationOrThrowArgs {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenerationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GenerationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  cursor?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GenerationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "main_region_id" | "identifier"> | undefined;
}
