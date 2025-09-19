import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageOrderByWithRelationInput } from "../../../inputs/LanguageOrderByWithRelationInput";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../../../inputs/LanguageWhereUniqueInput";
import { LanguageScalarFieldEnum } from "../../../../enums/LanguageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLanguageOrThrowArgs {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LanguageOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LanguageOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  cursor?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "iso639" | "iso3166" | "identifier" | "official" | "order"> | undefined;
}
