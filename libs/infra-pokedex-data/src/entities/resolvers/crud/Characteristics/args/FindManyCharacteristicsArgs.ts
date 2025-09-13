import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsOrderByWithRelationInput } from "../../../inputs/CharacteristicsOrderByWithRelationInput";
import { CharacteristicsWhereInput } from "../../../inputs/CharacteristicsWhereInput";
import { CharacteristicsWhereUniqueInput } from "../../../inputs/CharacteristicsWhereUniqueInput";
import { CharacteristicsScalarFieldEnum } from "../../../../enums/CharacteristicsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsWhereInput, {
    nullable: true
  })
  where?: CharacteristicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CharacteristicsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CharacteristicsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "stat_id" | "gene_mod_5"> | undefined;
}
